// const thead = document.querySelector('thead');
// const tbody = document.querySelector('tbody');
// const trows = tbody.querySelectorAll('tr');

// thead.addEventListener('click', onClickSort);

// function onClickSort(event) {

//   const target = event.target;
//   const cellIndex = event.target.cellIndex;

//   const sortedArr = [...trows].sort((first, next) => {
//     const cellTextFirst = first.cells[cellIndex].textContent.replace(/[,$]/g,'');
//     const cellTextNext = next.cells[cellIndex].textContent.replace(/[,$]/g,'');
// // if(!isNaN(+cellText))
//     if(!isNaN(Number(cellTextFirst))) {
//       return cellTextFirst - cellTextNext
//     }
//     return cellTextFirst.localeCompare(cellTextNext)
//   })
//   tbody.append(...sortedArr)
// }

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const trows = tbody.querySelectorAll('tr');

thead.addEventListener('click', onClickSort);

function onClickSort(event) {
    const target = event.target;
    const cellIndex = event.target.cellIndex;

    const sortedArr = [...trows].sort((first, next) => {
        const cellTextFirst = normalize(first, cellIndex);
        const cellTextNext = normalize(next, cellIndex);
        // if(!isNaN(+cellText))
        if (!isNaN(Number(cellTextFirst))) {
            return cellTextFirst - cellTextNext;
        }
        return cellTextFirst.localeCompare(cellTextNext);
    });
    tbody.append(...sortedArr);
}

function normalize(row, cellIndex) {
    return row.cells[cellIndex].textContent.replace(/[,$]/g, '');
}
