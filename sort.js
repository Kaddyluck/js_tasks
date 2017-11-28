var items = [10, 3, 12, 4, 1, 7];

function QuickSort(array)
{
    if (array.length == 0) return [];
    var a = [], b = [], p = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] < p)
        a[a.length] = array[i];
      else
        b[b.length] = array[ i ];
     }
    return QuickSort(a).concat(p, QuickSort(b));
}

console.log(QuickSort(items));
