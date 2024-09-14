import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Apicha lerdjitanakit",
    studentId: "660612162",
  });
};
