import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
  try {
    const { username, email, password } = await req.json();

    // Basic validation
    if (!username || !email || !password) {
      return new Response(
        JSON.stringify({ message: "Username, email, and password are required" }),
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("developers_tools"); // 👈 use your actual DB name
    const users = db.collection("users");

    // Check duplicates
    const existingUserByEmail = await users.findOne({ email });
    if (existingUserByEmail) {
      return new Response(
        JSON.stringify({ message: "User with this email already exists" }),
        { status: 409 }
      );
    }

    const existingUserByUsername = await users.findOne({ username });
    if (existingUserByUsername) {
      return new Response(
        JSON.stringify({ message: "Username is already taken" }),
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await users.insertOne({
      username,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
};
