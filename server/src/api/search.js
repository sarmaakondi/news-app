const express = require('express');
const axios = require('axios');

const router = express.Router();

const GUARDIAN_API = 'https://content.guardianapis.com/search';
const API_KEY = process.env.GUARDIAN_API_KEY;

router.get('/', async (req, res, next) => {
  try {
    const { q: searchTerm } = req.query;
    if (!searchTerm) {
      return res.status(400).json({ error: 'Search term is required' });
    }

    const response = await axios.get(GUARDIAN_API, {
      params: {
        q: searchTerm,
        'api-key': API_KEY,
      },
    });

    const articles = response.data.response.results.map((article) => ({
      id: article.id,
      title: article.webTitle,
      url: article.webUrl,
      date: new Date(article.webPublicationDate).toLocaleDateString(
        'en-GB'
      ),
      section: article.sectionName,
    }));

    res.json(articles);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
