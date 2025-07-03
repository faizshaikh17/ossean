const tokens = (process.env.GITHUB_TOKEN || '').split(',');
let currentIndex = 0;

export function getGithubTokens() {
    const token = tokens[currentIndex];
    currentIndex = (currentIndex + 1) % tokens.length
    return token
}