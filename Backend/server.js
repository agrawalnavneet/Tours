import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";
const date = moment().subtract(152, 'days').format();

const commitMessages = [
  "Enabled CORS and JSON parsing middleware",
  
];

const randomMessage = commitMessages[Math.floor(Math.random() * commitMessages.length)];

const data = { date };

jsonfile.writeFile(path, data, async (err) => {
  if (err) {
    console.error("❌ Error writing file:", err);
    return;
  }

  const git = simpleGit();

  try {
    await git.add("."); // ✅ Add all files
    await git.commit(randomMessage, { "--date": date });
    await git.push();
    console.log(`✅ Commit pushed: "${randomMessage}"`);
  } catch (error) {
    console.error("❌ Commit failed:", error);
  }
});
