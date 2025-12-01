import { execSync } from 'child_process';
function getCommitMessageSync(commitId, repoPath = '.') {
  try {
    // 使用 %B 格式获取完整的 commit message（包括正文）
    const command = `git show -s --format=%B ${commitId}`;
    const result = execSync(command, { 
      cwd: repoPath,
      encoding: 'utf8' 
    });
    return result.trim();
  } catch (error) {
    throw new Error(`Failed to get commit message for ${commitId}: ${error.message}`);
  }
}
try {
  const message = getCommitMessageSync('6be5cb01ab062fd49700b509943b68a107b3c710');
  console.log('Commit message:', message);
} catch (error) {
  console.error('Error:', error.message);

qwe}

