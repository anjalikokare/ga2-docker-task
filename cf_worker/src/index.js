export default {
    async fetch(request, env, ctx) {
        return new Response("24f2002015@ds.study.iitm.ac.in", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "text/plain",
                "bypass-tunnel-reminder": "1"
            }
        });
    }
};
