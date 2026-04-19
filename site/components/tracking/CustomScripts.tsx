"use client";

export function CustomScripts({
  position,
  content,
}: {
  position: "head" | "body-start" | "body-end";
  content: string;
}) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
