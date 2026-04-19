async function loadPortfolios() {
  const res = await fetch('./portfolios.json');
  const items = await res.json();
  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  items.forEach(item => {
    const card = document.createElement('a');
    card.className = 'card';
    card.href = `/${item.slug}/`;
    card.setAttribute('aria-label', `Open ${item.name}`);

    card.innerHTML = `
      <div class="thumb">
        <img src="${item.cover}" alt="${item.name} cover preview">
        <div class="watermark">${item.watermark || '© Your Name'}</div>
      </div>
      <div class="card-body">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p class="notice">Preview images only • Protected textile portfolio</p>
      </div>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('dragstart', e => e.preventDefault());
document.addEventListener('keydown', e => {
  const blocked = ['s', 'u', 'p'];
  if ((e.ctrlKey || e.metaKey) && blocked.includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
  if (e.key === 'PrintScreen') {
    e.preventDefault();
  }
});

loadPortfolios();
