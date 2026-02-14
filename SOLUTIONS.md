# Solutions and Analysis for Exam GA2

Based on the analysis of `exam-tds-2026-01-ga2.js` and `exam.js`, here are the 20 questions, their solution strategies, and relevant discussion links (where available in `exam.js`).

## 1. q-image-compression-dynamic
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/151
**Task:** Compress a generated image to < 400 bytes losslessly.
**Solution:**
1.  The exam page generates a 500x500 PNG image.
2.  Download this image.
3.  Use a tool like **ImageMagick**, **pngquant**, or online compressors (like TinyPNG, though verify it's lossless) to reduce the size.
4.  Since the image is generated with simple rectangles, it should be highly compressible.
5.  Upload the compressed image.

## 2. q-git-revert-env
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/263
**Task:** Remove a committed `.env` file from Git history.
**Solution:**
1.  Download the provided zip file and extract it.
2.  Use `git filter-repo --path .env --invert-paths` (recommended) or `git filter-branch` to remove the file from all commits.
3.  Create a `.gitignore` file containing `.env`.
4.  Create a `.env.example` file.
5.  Commit these changes.
6.  Push to a new public GitHub repository.
7.  Submit the Repository URL.

## 3. q-git-time-travel
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/281
**Task:** Find a specific commit hash in the history.
**Solution:**
1.  Download the repository.
2.  Run `git log -p config.json` to see the history of changes to `config.json`.
3.  Locate the commit where the `timeout` value was changed to the target value (e.g., 30, 45, 60, etc., specified in the question).
4.  Identify the **parent** of that commit (the commit immediately preceding it).
5.  Submit the 7-character short hash of that parent commit.

## 4. q-github-pages
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/144
**Task:** Host a portfolio page.
**Solution:**
1.  Create a GitHub repository (e.g., `my-portfolio`).
2.  Create an `index.html` file.
3.  Include your email address in the HTML. The hint suggests wrapping it in comments like `<!--email_off-->YOUR_EMAIL<!--/email_off-->` to avoid obfuscation by Cloudflare, or just ensuring it's present in the text.
4.  Enable GitHub Pages for the repository.
5.  Submit the Page URL (e.g., `https://username.github.io/my-portfolio/`).

## 5. q-github-pages-json-api
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/264
**Task:** Host a static JSON API.
**Solution:**
1.  You need to generate a specific JSON file based on your email.
2.  The JSON must have:
    *   `metadata`: `{ "email": "...", "version": "..." }`
    *   `products`: An array of product objects.
    *   `aggregations`: Stats per category.
3.  **Note:** Since the data requirements are randomized based on your email, you must read the question text carefully to get the specific "version" code and the list of products/aggregations values required.
4.  Host this `data.json` on GitHub Pages.
5.  Submit the URL to the JSON file.

## 6. q-github-action
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/129
**Task:** Create a GitHub Action with a specific step name.
**Solution:**
1.  In a GitHub repo, create `.github/workflows/main.yml`.
2.  Add a step with `name: <your_email>`.
    ```yaml
    name: Test
    on: workflow_dispatch
    jobs:
      test:
        runs-on: ubuntu-latest
        steps:
          - name: your_email@example.com
            run: echo "Hello"
    ```
3.  Trigger the workflow.
4.  Submit the Repository URL.

## 7. q-github-action-cache
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/135
**Task:** cache dependencies in GitHub Actions.
**Solution:**
1.  Create a workflow using `actions/cache@v4`.
2.  Use the cache key `cache-<suffix>` provided in the question.
3.  Include a step named `prime-cache-<suffix>`.
    ```yaml
    steps:
      - uses: actions/cache@v4
        with:
          path: ~/.cache/pip
          key: cache-1234567
      - name: prime-cache-1234567
        run: echo "Done"
    ```
4.  Run the workflow.
5.  Submit the Repository URL.

## 8. q-dependabot-config
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/261
**Task:** Configure Dependabot.
**Solution:**
1.  Create `.github/dependabot.yml`:
    ```yaml
    version: 2
    updates:
      - package-ecosystem: "pip"
        directory: "/"
        schedule:
          interval: "weekly"
        commit-message:
          prefix: "deps"
    ```
2.  Create `requirements.txt` with at least 3 dependencies (e.g., `fastapi`, `uvicorn`, `requests`).
3.  Ensure `README.md` contains your email.
4.  Push to GitHub and submit the URL.

## 9. q-docker-hub-image
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/84
**Task:** Push an image to Docker Hub.
**Solution:**
1.  Login to Docker Hub (`docker login`).
2.  Build an image: `docker build -t <username>/<repo>:<email_username> .`.
    *   Note: The tag must be the part of your email before the `@`.
3.  Push the image: `docker push <username>/<repo>:<email_username>`.
4.  Submit the Docker Hub image URL.

## 10. q-huggingface-docker
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/149
**Task:** Publish a Docker Space.
**Solution:**
1.  Create a Space on Hugging Face using the **Docker** SDK.
2.  `README.md`:
    ```yaml
    ---
    title: <required_title>
    emoji: 🚀
    colorFrom: blue
    colorTo: red
    sdk: docker
    app_port: <required_port>
    ---
    Deployment description including: <required_string>
    ```
3.  `Dockerfile`:
    ```dockerfile
    FROM python:3.11-slim
    RUN useradd -m -u 1000 user
    USER user
    ENV API_PORT=<required_port>
    WORKDIR /app
    COPY requirements.txt .
    RUN pip install --no-cache-dir -r requirements.txt
    COPY . .
    CMD uvicorn main:app --host 0.0.0.0 --port $API_PORT
    ```
4.  `requirements.txt`: `fastapi`, `uvicorn[standard]`.
5.  Set the Secret in Space settings.
6.  Submit the Space URL.

## 11. q-github-codespaces-devcontainer
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/140
**Task:** Configure Devcontainer.
**Solution:**
1.  Create `.devcontainer/devcontainer.json`:
    ```json
    {
      "name": "<required_name>",
      "image": "mcr.microsoft.com/devcontainers/python:1",
      "features": {
        "ghcr.io/devcontainers/features/python:1": {}
      },
      "customizations": {
        "vscode": {
          "extensions": ["astral-sh.uv", "ms-python.python"]
        }
      },
      "postCreateCommand": "uv pip install fastapi"
    }
    ```
2.  Push to GitHub.
3.  Open a Codespace.
4.  Run `echo $GITHUB_REPOSITORY $GITHUB_TOKEN` in the terminal.
5.  Submit the output.

## 12. q-github-gist
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/282
**Task:** Host a Gist.
**Solution:**
1.  Go to gist.github.com.
2.  Create a file (e.g., `index.html`) containing your email.
3.  Submit the Gist URL.

## 13. q-fastapi
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/109
**Task:** FastAPI Static Data Server.
**Solution:**
1.  Download the CSV provided in the question.
2.  Create `main.py`:
    ```python
    from fastapi import FastAPI, Query
    from fastapi.middleware.cors import CORSMiddleware
    import pandas as pd
    from typing import List

    app = FastAPI()
    app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

    df = pd.read_csv("q-fastapi.csv") # Use correct filename

    @app.get("/api")
    def get_students(class_: List[str] = Query(None, alias="class")):
        data = df
        if class_:
            data = data[data["class"].isin(class_)]
        return {"students": data.to_dict(orient="records")}
    ```
3.  Run it (`uvicorn main:app --port 8000`) and expose it (e.g., via ngrok).
4.  Submit the public URL.

## 14. q-vercel-latency
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/242
**Task:** Vercel function.
**Solution:**
1.  Create `api/index.py` (for Vercel).
2.  Implement `POST` handler that reads `regions` and `threshold_ms`.
3.  Calculate metrics and return JSON.
4.  Enable CORS (set `Access-Control-Allow-Origin: *`).
5.  Deploy to Vercel (`vercel deploy`).
6.  Submit the `...vercel.app/api` URL.

## 15. q-cloudflare-workers
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/280
**Task:** Cloudflare Worker.
**Solution:**
1.  Create a worker script:
    ```javascript
    export default {
      async fetch(request) {
        if (request.method === "OPTIONS") {
           return new Response(null, { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Headers": "*" } });
        }
        if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });

        const { type, value } = await request.json();
        let reversed;
        // Implement logic: type can be "string", "array", "words", "number"
        if (type === "string") reversed = value.split("").reverse().join("");
        else if (type === "array") reversed = value.reverse();
        else if (type === "words") reversed = value.split(" ").reverse().join(" ");
        else if (type === "number") reversed = parseInt(String(value).split("").reverse().join(""));

        return new Response(JSON.stringify({ reversed, email: "<your_email>" }), {
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      }
    }
    ```
2.  Deploy to Cloudflare.
3.  Submit the Worker URL.

## 16. q-cloudflared-tunnel
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/260
**Task:** Cloudflare Tunnel.
**Solution:**
1.  Run a local server: `python -m http.server 8080`.
2.  Run tunnel: `cloudflared tunnel --url http://localhost:8080`.
3.  Submit the `.trycloudflare.com` URL.

## 17. q-localtunnel
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/283
**Task:** Localtunnel.
**Solution:**
1.  Run local server having your email (e.g. `index.html`).
2.  Run `npx localtunnel --port <port>`.
3.  Submit the `loca.lt` URL.

## 18. q-fastapi-file-validation
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/262
**Task:** FastAPI File Upload.
**Solution:**
1.  Check headers for token.
2.  Check file content-type/extension.
3.  Check file size (read chunks or `len(await file.read())`).
4.  Parse CSV using `csv` module or `pandas`.
5.  Return metrics.
    ```python
    @app.post("/upload")
    async def upload(file: UploadFile, request: Request):
        token = request.headers.get("X-Upload-Token-...")
        if token != "...": return Response(status_code=401)
        # validation logic...
        content = await file.read()
        if len(content) > LIMIT: return Response(status_code=413)
        # processing logic...
        return { ... }
    ```

## 19. q-google-oauth-fastapi
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/146
**Task:** Submit valid Google ID Token.
**Solution:**
1.  Follow the instructions to get a Client ID.
2.  Use the "Sign in with Google" flow to get an `id_token`.
3.  Submit `{ "id_token": "...", "client_id": "..." }`.

## 20. q-ollama
**Discussion:** https://github.com/sanand0/tools-in-data-science-public/discussions/185
**Task:** Expose Ollama.
**Solution:**
1.  Set `OLLAMA_ORIGINS="*"`.
2.  Run `ollama serve`.
3.  Run ngrok with header injection:
    `ngrok http 11434 --response-header-add "X-Email: <email>"`
4.  Submit the ngrok URL.
