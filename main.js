const priceTea = 15.678; 

const priceCoffe = 123.965;

const priceCola = 90.2345;


const sum = priceTea + priceCoffe + priceCola;
const sumLow = Math.floor(priceTea) + Math.floor(priceCoffe) + Math.floor(priceCola);
const sumRound = (Math.round(sum / 100)) * 100;
const discount = (Math.random() * 99).toFixed(2) + '%';
const amountCash = 500;
const sumBolean = sumLow % 2 === 0;
const changeResult = (amountCash - sum);
const averageValue = (sum / 3).toFixed(2);
const randomDiscount = (Math.random() * 99).toFixed(0);
const discountPrice = (sum - (sum * (randomDiscount * 0.01))).toFixed(2);
const netProfitNumbers = (sum / 2).toFixed(0);
const netProfitPercent = ((randomDiscount / 100) * sum).toFixed(0);
const netProfit = netProfitNumbers - netProfitPercent;
const minNumb = Math.min(priceTea, priceCoffe, priceCola);
const maxNumb = Math.max(priceTea, priceCoffe, priceCola);


console.log(`<p><b>Максимальне число:</b> ${ maxNumb}</p>`);
console.log(`<p><b>Мінімальне число:</b> ${ minNumb}</p>`);
console.log(`<p><b>Cума вартості всіх товарів:</b> ${sum}</p>`);
console.log(`<p><b>Округлення використуване в МЕНЬШУ сторону:</b> ${sumLow}</p>`);
console.log(`<p><b>Cума товарів округлена до сотень:</b> ${sumRound}</p>`);
console.log(`<p><b>Булеве значення:</b> ${sumBolean}</p>`);
console.log(`<p><b>Cума решти,при оплаті всіх товарів клієнтом:</b> ${changeResult}        </p>`);
console.log(`<p><b>Cереднє значення цін (округлене до другого знаку після коми):</b> ${averageValue}</p>`);
console.log(`<p><b>Випадкова знижка:</b> ${randomDiscount}%</p>`);
console.log(`<p><b>Сума до оплати з випадковою знижкою (округлена до 2 знаків після коми):</b> ${discountPrice}</p>`);
console.log(`<p><b>Чистий прибуток (зі знижкою та собівартістю товарів):</b> ${netProfit}</p>`);







