# Cards

Cards are available with the class `.card`

## Simple Card

```html
<div class="card">
  <div class="card-body">
    <h3>Card</h3>
    <p class="subtitle">subtitle</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati
      ex modi nobis quisquam nihil? Facilis quaerat debitis saepe sunt inventore
      minima quas neque, animi optio, reprehenderit odit explicabo voluptatibus?
    </p>
  </div>
</div>
```

![Simple Card](../assets/components/cards/simple.png)

## Card with actions

```html
<div class="card">
  <div class="card-body">
    <h3>Card</h3>
    <p class="subtitle">subtitle</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati
      ex modi nobis quisquam nihil? Facilis quaerat debitis saepe sunt inventore
      minima quas neque, animi optio, reprehenderit odit explicabo voluptatibus?
    </p>
  </div>
  <div class="card-actions">
    <button class="btn">Button</button>
  </div>
</div>
```

![actions](../assets/components/cards/action.png)

## Card with an image

```html
<div class="card">
  <img
    class="card-img"
    src="https://images.unsplash.com/photo-1663487223048-4af72e7f6d40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
    alt=""
  />
  <div class="card-body">
    <h3>Card</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati
      ex modi nobis quisquam nihil? Facilis quaerat debitis saepe sunt inventore
      minima quas neque, animi optio, reprehenderit odit explicabo voluptatibus?
    </p>
  </div>
</div>
```

![card with image](../assets/components/cards/image.png)

## Cards inside the grid

```html
<div class="row">
  <div class="col-6">
    <div class="card">
      <div class="card-body">
        <h3>Card</h3>
        <p class="subtitle">subtitle</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          obcaecati ex modi nobis quisquam nihil? Facilis quaerat debitis saepe
          sunt inventore minima quas neque, animi optio, reprehenderit odit
          explicabo voluptatibus?
        </p>
      </div>
      <div class="card-actions">
        <button class="btn">Button</button>
      </div>
    </div>
  </div>
  <div class="col-6">
    <div class="card">
      <img
        class="card-img"
        src="https://images.unsplash.com/photo-1663487223048-4af72e7f6d40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
        alt=""
      />
      <div class="card-body">
        <h3>Card</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          obcaecati ex modi nobis quisquam nihil? Facilis quaerat debitis saepe
          sunt inventore minima quas neque, animi optio, reprehenderit odit
          explicabo voluptatibus?
        </p>
      </div>
    </div>
  </div>
</div>
```

![cards](../assets/components/cards/cards.png)
