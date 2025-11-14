# Coins Counter JavaScript

Program sederhana untuk menghitung pecahan uang dalam array dan menampilkannya dalam format yang mudah dibaca.

## Cara Pakai

```javascript
const coins = [50, 1000, 400, 50, 300, 1200, 1000, 25, 50, 45, 100];
```

## Output

Program menghasilkan 2 format output:

### Format 1: Console Log
```
coins = [
  3x 50,
  2x 1000,
  1x 400,
  1x 300,
  1x 1200,
  1x 25,
  1x 45,
  1x 100
]
```

### Format 2: Array JavaScript
```
[
  '3x 50', '2x 1000',
  '1x 400', '1x 300',
  '1x 1200', '1x 25',
  '1x 45', '1x 100'
]
```

## Cara Jalankan

```bash
node main.js
```

## Fungsi

- `countDenominations(arr)` - Menghitung jumlah setiap pecahan
- `displayResult(result, originalArray)` - Menampilkan format console log
- `getFormattedArray(result, originalArray)` - Menghasilkan array strings