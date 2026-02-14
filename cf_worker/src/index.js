export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // Global headers
        const corsHeaders = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
            "Access-Control-Allow-Headers": "*",
            "Content-Type": "application/json"
        };

        // Handle CORS preflight
        if (request.method === "OPTIONS") {
            return new Response(null, { headers: corsHeaders });
        }

        if (url.pathname === "/data" && request.method === "POST") {
            try {
                const body = await request.json();
                const { type, value } = body;
                let reversed;

                switch (type) {
                    case "string":
                        reversed = value.split("").reverse().join("");
                        break;
                    case "array":
                        reversed = [...value].reverse();
                        break;
                    case "words":
                        reversed = value.split(" ").reverse().join(" ");
                        break;
                    case "number":
                        const sign = Math.sign(value);
                        const str = Math.abs(value).toString();
                        reversed = sign * parseInt(str.split("").reverse().join(""), 10);
                        break;
                    default:
                        return new Response(JSON.stringify({ error: "Invalid type" }), {
                            status: 400,
                            headers: corsHeaders
                        });
                }

                return new Response(JSON.stringify({
                    reversed: reversed,
                    email: "24f2002015@ds.study.iitm.ac.in"
                }), {
                    headers: corsHeaders
                });
            } catch (e) {
                return new Response(JSON.stringify({ error: "Invalid JSON" }), {
                    status: 400,
                    headers: corsHeaders
                });
            }
        }

        return new Response("Not Found", { status: 404, headers: corsHeaders });
    }
};
