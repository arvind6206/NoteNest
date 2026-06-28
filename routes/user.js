import { Router } from "express";
import { noteModel, userModel } from "../model/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import authMiddleware from "../middleware/auth.js";

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await userModel.findOne({ email });

  if (existingUser) {
    return res.status(409).json({
      msg: "User already exists",
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    console.log(user);
  } catch (e) {
    console.log(e);
  }

  res.json({
    msg: "User signup successfully",
  });
});

userRouter.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    const matched = await bcrypt.compare(password, user.password);

    if (!matched) {
      return res.status(401).json({
        msg: "Incorrect Password",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    return res.json({
      msg: "Login successful",
      token,
    });

  } catch (err) {
    return res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

userRouter.post("/create", authMiddleware, async(req, res) => {
    console.log(req.userId)
    const {title, content, isPinned, isArchived, isTrashed} = req.body

    try {
        await noteModel.create({
            title, content, userId: req.userId, isPinned, isArchived, isTrashed
        })
        res.status(200).json({
            msg: "notes created successfully"
        })
    } catch (error) {
        console.log(error)
    }
})

userRouter.put('/note/:id', authMiddleware, async(req, res) => {
    const noteId = req.params.id
    const {title, content, isPinned, isArchived, isTrashed} = req.body

    const noteFound = await noteModel.findOneAndUpdate({
        _id: noteId,
        userId: req.userId
    }, {
        title, content, isPinned, isArchived, isTrashed
    })

    if(!noteFound){
        return res.json({
            msg: "Note Not Found"
        })
    } else {
        return res.json({
    msg: "Note updated successfully"
});
    }
})
export default userRouter;
