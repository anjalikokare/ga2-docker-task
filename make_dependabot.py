import os

# Create directories
os.makedirs(".github", exist_ok=True)

# 1. Create requirements.txt
with open("requirements.txt", "w") as f:
    f.write("fastapi\nrequests\npandas\n")
print("✅ Created requirements.txt")

# 2. Create README.md
with open("README.md", "w") as f:
    f.write("# Project\nContact: 24f2002015@ds.study.iitm.ac.in\n")
print("✅ Created README.md")

# 3. Create .github/dependabot.yml
dependabot_content = """version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "weekly"
    commit-message:
      prefix: "deps"
"""
with open(".github/dependabot.yml", "w") as f:
    f.write(dependabot_content)
print("✅ Created .github/dependabot.yml")

print("\nFiles are ready. Now run the git commands below!")
