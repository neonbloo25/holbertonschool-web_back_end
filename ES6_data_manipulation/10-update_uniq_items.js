// 10-update_uniq_items.js
function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  for (const [key, value] of map) {
    if (value === 1) map.set(key, 100);
  }
}

export default updateUniqueItems;
