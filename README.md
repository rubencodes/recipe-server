# recipe-server

A simple static JSON server to return recipes.

## API Endpoints

<table>
<tr>
<td><b>Description</b></td>
<td><b>Fetch a list of all recipe pointers</b></td>
</tr>
<tr>
  <td><b>Method</b></td>
  <td><code>GET</code></td>
</tr>
<tr>
  <td><b>Endpoint</b></td>
  <td><code>/recipes</code></td>
</tr>
<tr>
  <td><b>Parameters</b></td>
  <td>None.</td>
</tr>
<tr>
  <td><b>Example URL</b></td>
  <td><code>http://localhost:3000/recipes</code></td>
</tr>
<tr>
  <td><b>Example Response</b></td>
  <td>

```json
{
  "recipes": [
    {
      "id": "mamas_meatballs",
       "name": "Mama's Meatballs"
    }
  ]
}
```

  </td>
</tr>
</table>

-----

<table>
<tr>
<td><b>Description</b></td>
<td><b>Fetch a full recipe</b></td>
</tr>
<tr>
  <td><b>Method</b></td>
  <td><code>GET</code></td>
</tr>
<tr>
  <td><b>Endpoint</b></td>
  <td><code>/recipes/:id</code></td>
</tr>
<tr>
  <td><b>Parameters</b></td>
  <td>
    <code>id</code> - <i>string</i> - the unique id for the recipe.
  </td>
</tr>
<tr>
  <td><b>Example URL</b></td>
  <td><code>http://localhost:3000/recipes/mamas_meatballs</code></td>
</tr>
<tr>
  <td><b>Example Response</b></td>
  <td>

```json
{
  "recipe": {
    "name": "Mama's Meatballs",
    "image": "https://images.unsplash.com/photo-1586955080976-3854194bf139",
    "ingredients": [
      {
        "id": "frozen_meatballs",
        "name": "frozen meatballs",
        "amount": 6.5,
        "unit": {
          "name": "ball",
          "pluralName": "balls"
        }
      },
      {
        "id": "parmesan_cheese",
        "name": "parmesan cheese",
        "amount": 1,
        "unit": {
          "name": "tablespoon",
          "pluralName": "tablespoons",
          "metricName": "milliliter",
          "metricPluralName": "milliliters",
          "metricConversionFactor": 14.8
        }
      },
      {
        "id": "love",
        "name": "love",
        "amount": 1,
        "unit": {
          "name": "pinch",
          "pluralName": "pinches"
        }
      }
    ],
    "steps": [
      "Add frozen meatballs to plate.",
      "Place in microwave for 3 minutes.",
      "Sprinkle parmesan cheese on top.",
      "Enjoy!"
    ]
  }
}
```

  </td>
</tr>
</table>

-----

<table>
<tr>
<td><b>Description</b></td>
<td><b>Fetch a list of all ingredients</b></td>
</tr>
<tr>
  <td><b>Method</b></td>
  <td><code>GET</code></td>
</tr>
<tr>
  <td><b>Endpoint</b></td>
  <td><code>/ingredients</code></td>
</tr>
<tr>
  <td><b>Parameters</b></td>
  <td>None.</td>
</tr>
<tr>
  <td><b>Example URL</b></td>
  <td><code>http://localhost:3000/ingredients</code></td>
</tr>
<tr>
  <td><b>Example Response</b></td>
  <td>

```json
{
  "ingredients": [
    {
      "id": "frozen_meatballs",
      "name": "frozen meatballs"
    },
    {
      "id": "parmesan_cheese",
      "name": "parmesan cheese"
    },
    {
      "id": "love",
      "name": "love"
    }
  ]
}
```

  </td>
</tr>
</table>

-----

<table>
<tr>
<td><b>Description</b></td>
<td><b>Fetch a list of all recipe pointers with a matching ingredient</b></td>
</tr>
<tr>
  <td><b>Method</b></td>
  <td><code>GET</code></td>
</tr>
<tr>
  <td><b>Endpoint</b></td>
  <td><code>/ingredients/:id</code></td>
</tr>
<tr>
  <td><b>Parameters</b></td>
  <td>
    <code>id</code> - <i>string</i> - the unique id for the ingredient.
  </td>
</tr>
<tr>
  <td><b>Example URL</b></td>
  <td><code>http://localhost:3000/ingredients/love</code></td>
</tr>
<tr>
  <td><b>Example Response</b></td>
  <td>

```json
{
  "recipes": [
    {
      "id": "mamas_meatballs",
      "name": "Mama's Meatballs"
    }
  ]
}
```

  </td>
</tr>
</table>

-----

<table>
<tr>
<td><b>Description</b></td>
<td><b>Search for recipes and ingredients with matching names</b></td>
</tr>
<tr>
  <td><b>Method</b></td>
  <td><code>GET</code></td>
</tr>
<tr>
  <td><b>Endpoint</b></td>
  <td><code>/search?query=:query</code></td>
</tr>
<tr>
  <td><b>Parameters</b></td>
  <td>
    <code>query</code> - <i>string</i> - the search query to match recipes and ingredients by.
  </td>
</tr>
<tr>
  <td><b>Example URL</b></td>
  <td><code>http://localhost:3000/search?query=meatballs</code></td>
</tr>
<tr>
  <td><b>Example Response</b></td>
  <td>

```json
{
  "recipes": [
    {
      "id": "mamas_meatballs",
      "name": "Mama's Meatballs"
    }
  ],
  "ingredients": [
    {
      "id": "frozen_meatballs",
      "name": "frozen meatballs"
    }
  ]
}
```

  </td>
</tr>
</table>
