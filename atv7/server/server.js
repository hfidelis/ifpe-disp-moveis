require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const { v2: cloudinary } = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = 3001;

app.use(cors());
app.use(json());

app.get('/images', async (req, res) => {
  const { tag = 'aula7ifpe' } = req.query;

  try {
    const result = await cloudinary.api.resources_by_tag(tag, {
      type: 'upload',
      prefix: '',
      max_results: 100,
    });
    res.json(result.resources);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar imagens' });
  }
});

app.delete('/delete-image', async (req, res) => {
  const { public_id } = req.body;

  if (!public_id) {
    return res.status(400).json({ error: 'public_id é obrigatório' });
  }

  try {
    const result = await cloudinary.uploader.destroy(public_id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar imagem' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`app listening on port ${PORT}`);
});