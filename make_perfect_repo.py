import os

repo_name = "final-fix"
os.makedirs(repo_name, exist_ok=True)
os.makedirs(os.path.join(repo_name, ".github"), exist_ok=True)

# 1. requirements.txt
with open(os.path.join(repo_name, "requirements.txt"), "w") as f:
    f.write("fastapi\nrequests\npandas\n")

# 2. README.md
with open(os.path.join(repo_name, "README.md"), "w") as f:
    f.write("# Project\nContact: 24f2002015@ds.study.iitm.ac.in\n")

# 3. .github/dependabot.yml
dependabot_content = """version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "weekly"
    commit-message:
      prefix: "deps"
"""
with open(os.path.join(repo_name, ".github", "dependabot.yml"), "w") as f:
    f.write(dependabot_content)

print(f"✅ Created folder '{repo_name}' with correct files.")
print("Now run git commands inside it!")
