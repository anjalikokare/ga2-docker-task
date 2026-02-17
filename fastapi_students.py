from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import csv
from typing import List, Optional
import os

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load data once at startup
students_data = []
FILENAME = "q-fastapi.csv"  # Using the larger potential exam file

if os.path.exists(FILENAME):
    with open(FILENAME, "r") as f:
        reader = csv.DictReader(f)
        for row in reader:
            try:
                # Strip whitespace just in case
                sid = int(row["studentId"].strip())
                cls = row["class"].strip()
                students_data.append({
                    "studentId": sid,
                    "class": cls
                })
            except (ValueError, KeyError):
                continue
else:
    print(f"Warning: {FILENAME} not found. Trying students.csv")
    if os.path.exists("students.csv"):
         with open("students.csv", "r") as f:
            reader = csv.DictReader(f)
            for row in reader:
                try:
                    sid = int(row["studentId"].strip())
                    cls = row["class"].strip()
                    students_data.append({
                        "studentId": sid,
                        "class": cls
                    })
                except (ValueError, KeyError):
                    continue

@app.get("/api")
def get_students(class_: Optional[List[str]] = Query(None, alias="class")):
    # Filter if class params are provided
    if class_:
        filtered = [s for s in students_data if s["class"] in class_]
        return {"students": filtered}
    
    # Return all if no filter
    return {"students": students_data}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8004)
