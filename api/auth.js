// Archivo: /api/auth.js
export default async function handler(req, res) {
    const { code } = req.query;

    if (!code) {
        return res.status(400).send('No se proporcionó un código de Patreon.');
    }

    try {
        // 1. Intercambiamos el código por un Token de acceso en Patreon
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

        // 2. Aquí iría la lógica para verificar si está suscrito al Tier 2.
        // Por ahora, si logra iniciar sesión, le damos el VIP.
        const isVIP = true; 

        if (isVIP) {
            // Guardamos una cookie que dura 30 días para que no vea anuncios
            res.setHeader('Set-Cookie', `isVIP=true; Path=/; Max-Age=${60 * 60 * 24 * 30}`);
            
            // Redirigimos al usuario de vuelta a la página principal del Omnitrix
            res.redirect(302, '/');
        } else {
            res.send('Autenticación exitosa, pero no eres nivel Inteligencia Galván.');
        }

    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error en el servidor.');
    }
}

**Paso 3: ¡Aviso importante para tu configuración en la web de Patreon!**
Debes entrar al portal de desarrolladores de Patreon (donde sacaste tu Client ID). Busca la opción de tu App, y donde dice **"Redirect URIs"** asegúrate de agregar exactamente este link:
`https://omnitrix-lac.vercel.app/api/auth`

¡Con eso, todo el flujo de inicio de sesión estará armado! Cuando lo intentes, avísame cómo te va.
