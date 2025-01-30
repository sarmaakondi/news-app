const express = require('express');
const axios = require('axios');

const router = express.Router();

const GUARDIAN_API = 'https://content.guardianapis.com/search';
const API_KEY = process.env.GUARDIAN_API_KEY;

// eslint-disable-next-line consistent-return
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

    const { results } = response.data.response;
    if (!results || results.length === 0) {
      return res.status(404).json({
        message: 'No articles found for the given search term.',
      });
    }

    const articles = results.map((article) => ({
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
