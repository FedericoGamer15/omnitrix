// Archivo: /api/auth.js
module.exports = async function handler(req, res) {
    const code = req.query.code;

    if (!code) {
        return res.status(400).send('No se proporcionó un código de autenticación de Patreon.');
    }

    try {
        const tokenResponse = await fetch('https://www.patreon.com/api/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                code: code,
                grant_type: 'authorization_code',
                client_id: process.env.PATREON_CLIENT_ID,
                client_secret: process.env.PATREON_CLIENT_SECRET,
                redirect_uri: 'https://omnitrix-lac.vercel.app/api/auth'
            }),
        });

        const tokenData = await tokenResponse.json();

        if (tokenData.error) {
            return res.status(401).send('Error al autorizar con Patreon: ' + tokenData.error);
        }

        // Por ahora, asumimos que si inició sesión, es VIP
        const isVIP = true; 

        if (isVIP) {
            // Ponemos la cookie mágica
            res.setHeader('Set-Cookie', `isVIP=true; Path=/; Max-Age=${60 * 60 * 24 * 30}; Secure; SameSite=Lax`);
            // Lo regresamos al reloj
            res.redirect(302, '/');
        } else {
            res.send('Autenticación exitosa, pero no tienes el nivel Inteligencia Galván.');
        }

    } catch (error) {
        console.error("Error del servidor:", error);
        res.status(500).send('Hubo un error interno en el servidor al conectar con Patreon.');
    }
};
