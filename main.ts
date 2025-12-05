console.log("TS loaded from Deno server!");

const title = document.getElementById("title")!;
title.textContent = "Deno で TypeScript 実行中！ 🚀";

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Deno"));
