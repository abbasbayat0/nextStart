"use server";

import fs from "node:fs";

export async function save(image) {
  const stream = fs.createWriteStream(`./public/${image.name}`);
  const buffer = await image.arrayBuffer();
  stream.write(Buffer.from(buffer), (e) => {
    if (e) console.log(e);
  });
}
