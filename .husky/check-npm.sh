# Get the last commit hash where package.json or package-lock.json was changed
LAST_COMMIT=$(git log -n 1 --pretty=format:%h -- package.json package-lock.json)

# Get the current branch's last commit hash
CURRENT_COMMIT=$(git rev-parse HEAD)

# Check if package.json or package-lock.json has changed
if [ "$LAST_COMMIT" = "$CURRENT_COMMIT" ]; then
  echo "Changes detected in package.json or package-lock.json. Installing packages..."
  npm install
fi