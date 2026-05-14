#!/usr/bin/env node

/**
 * Easypanel deployment helper
 * Run: node deploy.js
 *
 * Reads .env and outputs environment variables for Easypanel service config.
 */

const fs = require("fs");
const path = require("path");

const envPath = path.join(__dirname, ".env");
const envExample = path.join(__dirname, ".env.example");

if (!fs.existsSync(envPath)) {
  console.log("No .env found. Copying from .env.example...");
  if (fs.existsSync(envExample)) {
    fs.copyFileSync(envExample, envPath);
    console.log("Created .env from .env.example. Edit it with your values.");
  } else {
    console.log("No .env.example found either. Create a .env file manually.");
  }
  process.exit(0);
}

const envContent = fs.readFileSync(envPath, "utf-8");
const vars = {};

envContent.split("\n").forEach((line) => {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) return;
  const eqIdx = trimmed.indexOf("=");
  if (eqIdx === -1) return;
  const key = trimmed.slice(0, eqIdx).trim();
  const val = trimmed.slice(eqIdx + 1).trim();
  vars[key] = val;
});

console.log("\n=== Easypanel Environment Variables ===\n");
Object.entries(vars).forEach(([key, val]) => {
  console.log(`${key}=${val}`);
});
console.log(
  "\nCopy these into your Easypanel service environment variables.\n"
);
