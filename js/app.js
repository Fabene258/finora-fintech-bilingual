const T={
en:{
"nav.overview":"Overview","nav.transactions":"Transactions","nav.budgets":"Budgets","nav.goals":"Goals",
"hero.eyebrow":"PERSONAL FINANCE, MADE CLEAR","hero.title":"Know where your money goes.","hero.text":"Track spending, monitor budgets and build savings goals from one clean dashboard.","hero.balance":"Current balance","hero.saved":"Savings rate","hero.budget":"Budget used","hero.income":"Income this month","hero.expenses":"Expenses this month",
"actions.addTransaction":"Add transaction","actions.viewBudgets":"View budgets",
"metrics.balance":"Balance","metrics.balanceDesc":"Available across tracked accounts","metrics.income":"Income","metrics.incomeDesc":"Total income in the selected month","metrics.expenses":"Expenses","metrics.expensesDesc":"Total expenses in the selected month","metrics.savings":"Savings","metrics.savingsDesc":"Income remaining after expenses",
"chart.title":"Cash flow","chart.text":"Income and expenses over the last 6 months.","chart.sixMonths":"6 months","chart.threeMonths":"3 months","chart.income":"Income","chart.expenses":"Expenses",
"spending.title":"Spending by category","spending.text":"Where most of your money goes.",
"transactions.eyebrow":"ACTIVITY","transactions.title":"Recent transactions","filter.all":"All","filter.income":"Income","filter.expense":"Expenses",
"budgets.eyebrow":"MONTHLY LIMITS","budgets.title":"Budgets","budgets.text":"See how much of each monthly category budget has been used.","budgets.used":"used","budgets.left":"left","budgets.over":"over budget",
"goals.eyebrow":"SAVINGS","goals.title":"Savings goals","goals.new":"New goal","goals.saved":"saved","goals.remove":"Remove goal",
"footer.demo":"Personal finance dashboard demo created for a developer portfolio.","footer.product":"Product","footer.note":"Demo note","footer.local":"Demo data is stored locally in your browser.",
"modal.transactionEyebrow":"NEW TRANSACTION","modal.transactionTitle":"Add transaction","modal.goalEyebrow":"NEW SAVINGS GOAL","modal.goalTitle":"Create goal",
"form.type":"Type","form.amount":"Amount","form.description":"Description","form.category":"Category","form.date":"Date","form.saveTransaction":"Save transaction","form.goalName":"Goal name","form.target":"Target","form.saved":"Already saved","form.saveGoal":"Save goal",
"toast.transaction":"Transaction saved.","toast.removed":"Transaction removed.","toast.goal":"Savings goal created.","toast.goalRemoved":"Goal removed.","search":"Search transaction",
"categories.salary":"Salary","categories.food":"Food","categories.transport":"Transport","categories.shopping":"Shopping","categories.utilities":"Utilities","categories.health":"Health","categories.other":"Other",
"months.mar":"Mar","months.apr":"Apr","months.may":"May","months.jun":"Jun","months.jul":"Jul","months.aug":"Aug"
},
pt:{
"nav.overview":"Visão geral","nav.transactions":"Transações","nav.budgets":"Orçamentos","nav.goals":"Metas",
"hero.eyebrow":"FINANÇAS PESSOAIS, SEM CONFUSÃO","hero.title":"Sabe para onde vai o teu dinheiro.","hero.text":"Controla despesas, acompanha orçamentos e cria metas de poupança num único painel.","hero.balance":"Saldo actual","hero.saved":"Taxa de poupança","hero.budget":"Orçamento usado","hero.income":"Receita deste mês","hero.expenses":"Despesas deste mês",
"actions.addTransaction":"Adicionar transação","actions.viewBudgets":"Ver orçamentos",
"metrics.balance":"Saldo","metrics.balanceDesc":"Disponível nas contas acompanhadas","metrics.income":"Receitas","metrics.incomeDesc":"Total de receitas no mês seleccionado","metrics.expenses":"Despesas","metrics.expensesDesc":"Total de despesas no mês seleccionado","metrics.savings":"Poupança","metrics.savingsDesc":"Receita restante depois das despesas",
"chart.title":"Fluxo de caixa","chart.text":"Receitas e despesas nos últimos 6 meses.","chart.sixMonths":"6 meses","chart.threeMonths":"3 meses","chart.income":"Receitas","chart.expenses":"Despesas",
"spending.title":"Despesas por categoria","spending.text":"Onde gastas a maior parte do dinheiro.",
"transactions.eyebrow":"ACTIVIDADE","transactions.title":"Transações recentes","filter.all":"Todas","filter.income":"Receitas","filter.expense":"Despesas",
"budgets.eyebrow":"LIMITES MENSAIS","budgets.title":"Orçamentos","budgets.text":"Vê quanto de cada orçamento mensal já foi utilizado.","budgets.used":"usado","budgets.left":"restante","budgets.over":"acima do orçamento",
"goals.eyebrow":"POUPANÇA","goals.title":"Metas de poupança","goals.new":"Nova meta","goals.saved":"poupado","goals.remove":"Remover meta",
"footer.demo":"Dashboard de finanças pessoais criado como demonstração para portfólio.","footer.product":"Produto","footer.note":"Nota da demo","footer.local":"Os dados de demonstração ficam guardados localmente no navegador.",
"modal.transactionEyebrow":"NOVA TRANSAÇÃO","modal.transactionTitle":"Adicionar transação","modal.goalEyebrow":"NOVA META DE POUPANÇA","modal.goalTitle":"Criar meta",
"form.type":"Tipo","form.amount":"Valor","form.description":"Descrição","form.category":"Categoria","form.date":"Data","form.saveTransaction":"Guardar transação","form.goalName":"Nome da meta","form.target":"Objectivo","form.saved":"Já poupado","form.saveGoal":"Guardar meta",
"toast.transaction":"Transação guardada.","toast.removed":"Transação removida.","toast.goal":"Meta de poupança criada.","toast.goalRemoved":"Meta removida.","search":"Pesquisar transação",
"categories.salary":"Salário","categories.food":"Alimentação","categories.transport":"Transporte","categories.shopping":"Compras","categories.utilities":"Serviços","categories.health":"Saúde","categories.other":"Outros",
"months.mar":"Mar","months.apr":"Abr","months.may":"Mai","months.jun":"Jun","months.jul":"Jul","months.aug":"Ago"
}};
const initialTransactions=[
{id:1,type:"income",description:"Monthly salary",category:"salary",amount:52000,date:"2026-09-01"},
{id:2,type:"expense",description:"Apartment rent",category:"other",amount:12500,date:"2026-09-02"},
{id:3,type:"expense",description:"Groceries",category:"food",amount:4350,date:"2026-09-05"},
{id:4,type:"expense",description:"Internet & mobile",category:"utilities",amount:2200,date:"2026-09-06"},
{id:5,type:"expense",description:"Transport",category:"transport",amount:3100,date:"2026-09-08"},
{id:6,type:"income",description:"Freelance project",category:"salary",amount:14500,date:"2026-09-10"},
{id:7,type:"expense",description:"Pharmacy",category:"health",amount:1850,date:"2026-09-11"},
{id:8,type:"expense",description:"Clothing",category:"shopping",amount:5600,date:"2026-09-14"},
{id:9,type:"expense",description:"Restaurant",category:"food",amount:2100,date:"2026-09-18"}
];
const budgets={food:9000,transport:6000,shopping:8000,utilities:5000,health:5000,other:15000};
const initialGoals=[
{id:1,name:"Emergency fund",target:120000,saved:42000},
{id:2,name:"New laptop",target:85000,saved:35000},
{id:3,name:"Travel",target:60000,saved:18000}
];
const monthlyData=[
{m:"mar",income:52000,expense:37200},{m:"apr",income:61000,expense:41800},{m:"may",income:57000,expense:39000},
{m:"jun",income:68000,expense:44000},{m:"jul",income:63000,expense:47200},{m:"aug",income:66500,expense:43800}
];
let transactions=JSON.parse(localStorage.getItem("finoraTransactions")||"null")||initialTransactions;
let goals=JSON.parse(localStorage.getItem("finoraGoals")||"null")||initialGoals;
let lang=localStorage.getItem("finoraLang")||"en";
let currency=localStorage.getItem("finoraCurrency")||"MZN";
let search="",filter="all";
const FX=64;
const $=id=>document.getElementById(id),t=k=>T[lang][k]??k;
function amount(v){const val=currency==="MZN"?v:v/FX;return new Intl.NumberFormat(lang==="pt"?"pt-MZ":"en-US",{maximumFractionDigits:currency==="MZN"?0:2}).format(val)+" "+currency}
function save(){localStorage.setItem("finoraTransactions",JSON.stringify(transactions));localStorage.setItem("finoraGoals",JSON.stringify(goals))}
function totals(){const income=transactions.filter(x=>x.type==="income").reduce((s,x)=>s+x.amount,0),expenses=transactions.filter(x=>x.type==="expense").reduce((s,x)=>s+x.amount,0);return{income,expenses,balance:income-expenses,savings:Math.max(0,income-expenses)}}
function setLang(next){lang=next;localStorage.setItem("finoraLang",lang);document.documentElement.lang=lang;document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(T[lang][k])el.textContent=T[lang][k]});$("langEN").classList.toggle("active",lang==="en");$("langPT").classList.toggle("active",lang==="pt");$("transactionSearch").placeholder=t("search");renderAll()}
function setCurrency(next){currency=next;localStorage.setItem("finoraCurrency",currency);$("currencyMZN").classList.toggle("active",currency==="MZN");$("currencyUSD").classList.toggle("active",currency==="USD");renderAll()}
function renderMetrics(){const x=totals(),rate=x.income?Math.round(x.savings/x.income*100):0,totalBudget=Object.values(budgets).reduce((a,b)=>a+b,0),budgetSpend=transactions.filter(x=>x.type==="expense"&&budgets[x.category]).reduce((s,x)=>s+x.amount,0),budgetRate=Math.round(budgetSpend/totalBudget*100);$("heroBalance").textContent=amount(x.balance);$("heroSaved").textContent=rate+"%";$("heroBudget").textContent=budgetRate+"%";$("heroIncome").textContent=amount(x.income);$("heroExpenses").textContent=amount(x.expenses);$("metricBalance").textContent=amount(x.balance);$("metricIncome").textContent=amount(x.income);$("metricExpenses").textContent=amount(x.expenses);$("metricSavings").textContent=amount(x.savings);$("metricSavingsRate").textContent=rate+"%"}
function categorySpend(cat){return transactions.filter(x=>x.type==="expense"&&x.category===cat).reduce((s,x)=>s+x.amount,0)}
function renderCategories(){const cats=["food","transport","shopping","utilities","health","other"];const vals=cats.map(c=>categorySpend(c)),max=Math.max(...vals,1);$("categoryList").innerHTML=cats.map((c,i)=>`<div class="category-row"><img src="assets/icons/${c}.svg" alt=""><div class="category-info"><div class="category-info-top"><span>${t("categories."+c)}</span><span>${Math.round(vals[i]/max*100)}%</span></div><div class="category-bar"><div class="category-fill" style="width:${Math.max(4,vals[i]/max*100)}%"></div></div></div><strong>${amount(vals[i])}</strong></div>`).join("")}
function renderBudgets(){const cats=["food","transport","shopping","utilities","health","other"];$("budgetGrid").innerHTML=cats.map((c,i)=>{const used=categorySpend(c),limit=budgets[c],pct=Math.round(used/limit*100),left=limit-used;return `<article class="budget-card" style="animation-delay:${i*.04}s"><div class="budget-card-head"><img src="assets/icons/${c}.svg" alt=""><span>${pct}% ${t("budgets.used")}</span></div><h3>${t("categories."+c)}</h3><div class="budget-values"><span>${amount(used)}</span><strong>${amount(limit)}</strong></div><div class="budget-bar"><div class="budget-fill ${pct>100?"over":""}" style="width:${Math.min(pct,100)}%"></div></div><div class="budget-status">${left>=0?amount(left)+" "+t("budgets.left"):amount(Math.abs(left))+" "+t("budgets.over")}</div></article>`}).join("")}
function renderTransactions(){let list=[...transactions].filter(x=>(filter==="all"||x.type===filter)&&`${x.description} ${x.category}`.toLowerCase().includes(search.toLowerCase())).sort((a,b)=>b.date.localeCompare(a.date));$("transactionList").innerHTML=list.map((x,i)=>`<article class="transaction-item" style="animation-delay:${i*.03}s"><img src="assets/icons/${x.category}.svg" alt=""><div class="transaction-main"><h3>${x.description}</h3><p>${t("categories."+x.category)}</p></div><span class="transaction-date">${formatDate(x.date)}</span><strong class="transaction-amount ${x.type}">${x.type==="income"?"+":"-"}${amount(x.amount)}</strong><button class="transaction-remove" data-remove-transaction="${x.id}">×</button></article>`).join("")}
function renderGoals(){$("goalGrid").innerHTML=goals.map((g,i)=>{const pct=Math.min(100,Math.round(g.saved/g.target*100));return `<article class="goal-card" style="animation-delay:${i*.04}s"><div class="goal-icon">◎</div><h3>${g.name}</h3><p>${pct}% ${t("goals.saved")}</p><div class="goal-amounts"><span>${amount(g.saved)}</span><strong>${amount(g.target)}</strong></div><div class="goal-bar"><div class="goal-fill" style="width:${pct}%"></div></div><button data-remove-goal="${g.id}">${t("goals.remove")}</button></article>`}).join("")}
function renderChart(){const n=Number($("chartRange").value),data=monthlyData.slice(-n),svg=$("cashflowChart"),W=680,H=250,pad=28,max=Math.max(...data.flatMap(d=>[d.income,d.expense]),1),step=(W-pad*2)/(data.length-1||1);const y=v=>H-pad-(v/max)*(H-pad*2),pts=(key)=>data.map((d,i)=>[pad+i*step,y(d[key])]);const path=arr=>"M "+arr.map(p=>p.join(",")).join(" L ");const ip=pts("income"),ep=pts("expense");let html="";for(let i=0;i<5;i++){const yy=pad+i*((H-pad*2)/4);html+=`<line class="chart-grid" x1="${pad}" y1="${yy}" x2="${W-pad}" y2="${yy}"/>`}html+=`<path class="chart-fill-income" d="${path(ip)} L ${ip[ip.length-1][0]},${H-pad} L ${ip[0][0]},${H-pad} Z"/><path class="chart-fill-expense" d="${path(ep)} L ${ep[ep.length-1][0]},${H-pad} L ${ep[0][0]},${H-pad} Z"/><path class="income-line" d="${path(ip)}"/><path class="expense-line" d="${path(ep)}"/>`;ip.forEach((p,i)=>html+=`<circle class="chart-point-income" cx="${p[0]}" cy="${p[1]}" r="5"/><text class="chart-label" x="${p[0]}" y="${H-5}" text-anchor="middle">${t("months."+data[i].m)}</text>`);ep.forEach(p=>html+=`<circle class="chart-point-expense" cx="${p[0]}" cy="${p[1]}" r="5"/>`);svg.innerHTML=html}
function renderAll(){renderMetrics();renderCategories();renderBudgets();renderTransactions();renderGoals();renderChart()}
function formatDate(d){return new Intl.DateTimeFormat(lang==="pt"?"pt-MZ":"en-GB",{day:"2-digit",month:"short"}).format(new Date(d+"T12:00:00"))}
function openModal(id){$(id).classList.add("open");document.body.classList.add("no-scroll")}function closeModal(id){$(id).classList.remove("open");document.body.classList.remove("no-scroll")}
let timer;function toast(msg){$("toast").textContent=msg;$("toast").classList.add("show");clearTimeout(timer);timer=setTimeout(()=>$("toast").classList.remove("show"),1800)}
$("addTransactionBtn").addEventListener("click",()=>openModal("transactionModal"));$("addTransactionHero").addEventListener("click",()=>openModal("transactionModal"));$("addGoalBtn").addEventListener("click",()=>openModal("goalModal"));
document.querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",()=>closeModal(b.dataset.close)));
$("transactionForm").addEventListener("submit",e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target).entries());transactions.push({id:Date.now(),type:d.type,description:d.description,category:d.category,amount:Number(d.amount),date:d.date});save();e.target.reset();closeModal("transactionModal");renderAll();toast(t("toast.transaction"))});
$("goalForm").addEventListener("submit",e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target).entries());goals.push({id:Date.now(),name:d.name,target:Number(d.target),saved:Number(d.saved)});save();e.target.reset();closeModal("goalModal");renderGoals();toast(t("toast.goal"))});
document.addEventListener("click",e=>{const tr=e.target.closest("[data-remove-transaction]");if(tr){transactions=transactions.filter(x=>x.id!==Number(tr.dataset.removeTransaction));save();renderAll();toast(t("toast.removed"))}const gl=e.target.closest("[data-remove-goal]");if(gl){goals=goals.filter(x=>x.id!==Number(gl.dataset.removeGoal));save();renderGoals();toast(t("toast.goalRemoved"))}});
$("transactionSearch").addEventListener("input",e=>{search=e.target.value;renderTransactions()});$("transactionFilter").addEventListener("change",e=>{filter=e.target.value;renderTransactions()});$("chartRange").addEventListener("change",renderChart);
$("langEN").addEventListener("click",()=>setLang("en"));$("langPT").addEventListener("click",()=>setLang("pt"));$("currencyMZN").addEventListener("click",()=>setCurrency("MZN"));$("currencyUSD").addEventListener("click",()=>setCurrency("USD"));
$("themeBtn").addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("finoraTheme",document.body.classList.contains("dark")?"dark":"light")});if(localStorage.getItem("finoraTheme")==="dark")document.body.classList.add("dark");
$("mobileMenu").addEventListener("click",()=>$("mobileNav").classList.toggle("open"));document.querySelectorAll(".mobile-nav a").forEach(a=>a.addEventListener("click",()=>$("mobileNav").classList.remove("open")));
document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)closeModal(m.id)}));document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal("transactionModal");closeModal("goalModal")}});
const today=new Date().toISOString().slice(0,10);document.querySelector('input[name="date"]').value=today;$("year").textContent=new Date().getFullYear();setLang(lang);setCurrency(currency);window.addEventListener("load",()=>setTimeout(()=>$("loader").classList.add("hide"),350));
