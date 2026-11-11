const crypto = require("crypto");

function checkStrength(password) {
  if (typeof password !== "string") {
    return {
      score: 0,
      label: "WEAK",
      feedback: ["Password must be a string"],
    };
  }

  let score = 0;
  const feedback = [];

  if (password.length >= 8) {
    score += 1;
  } else {
    feedback.push("Use 8+ chars");
  }

  if (/[a-z]/.test(password)) {
    score += 1;
  } else {
    feedback.push("Add lowercase");
  }

  if (/[A-Z]/.test(password)) {
    score += 1;
  } else {
    feedback.push("Add uppercase");
  }

  if (/[0-9]/.test(password)) {
    score += 1;
  } else {
    feedback.push("Add number");
  }

  if (/[^a-zA-Z0-9]/.test(password)) {
    score += 1;
  } else {
    feedback.push("Add symbol");
  }

  let label;
  if (score <= 2) {
    label = "WEAK";
  } else if (score <= 4) {
    label = "MEDIUM";
  } else {
    label = "STRONG";
  }

  return {
    score,
    label,
    feedback,
  };
}

function hashPassword(password) {
  if (typeof password !== "string") {
    return "";
  }

  const hash = crypto.createHash("sha256");

  hash.update(password);

  const hashed = hash.digest("hex");
  return hashed;
}

function main() {
  // STEP 1: Check process.argv, if no password given, print usage and return
  if (process.argv.length < 3) {
    console.log("Usage: node pass_guard.js <password>");
    return;
  }

  const password = process.argv[2];

  const result = checkStrength(password);

  const hashed = hashPassword(password);

  console.log(`[${result.label}] Score: ${result.score}/5`);

  for (const message of result.feedback) {
    console.log(`- ${message}`);
  }

  console.log(`SHA-256: ${hashed}`);

  return;
}

main();
