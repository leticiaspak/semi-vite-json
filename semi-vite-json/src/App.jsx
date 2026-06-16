
import s from './App.module.css'
import products from './constants/products.json'
import { Card } from './components/card'

function App() {


  return (
    <>
     <h1 className={s.titulo}> Página de Produtos</h1>
     <main className={s.principal}>
        {
          products.map((item) => {
            return(
              <div key={item.id} className={s.card}>
                <Card image={item.image} name={item.name} desc={item.desc} value={item.value}/>
                </div>
              )
          })}
     </main>
    </>
  )
}

export default App
