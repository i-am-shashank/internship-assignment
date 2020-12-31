import styles from "../styles/Home.module.css";
import Card from "./components/Card";

function fetchData() {

  const data = [
    {
      img:
        "/medias/Realme-6-White-RBS0606IN-Smart-Phones-491600706-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4OTIwfGltYWdlL2pwZWd8aW1hZ2VzL2g5MC9oMjYvOTI2MDk5OTA4MjAxNC5qcGd8YTljZTQyNTMyNWNmZTM4NjBjZTZmOWY0NjJlOTIxOGI2YTk5YmMyNDA0ZmUxYWUxNDUzYzg3MjY4NTA1MGNmNQ",
      name: "Realme 6 128 GB, 8 GB RAM, Comet White, Smartphone",
      price: 15099,
    },
    {
      img:
        "/medias/Oppo-F17-8-128GB-Navy-Blue-491901067-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDE5OHxpbWFnZS9qcGVnfGltYWdlcy9oZmMvaDlkLzkzODgyMDQwOTc1NjYuanBnfGRkMzU3ZWMxYzFmMGEyODk4MTgxMDMzZTZmZjZkYzc3MDI4YTBmNDViMjE4NGZlMmU5MzI1OTBhM2UwYzcyOWQ",
      name: "Oppo F17 128 GB, 8 GB RAM",
      price: 18490,
    },
    {
      img:
        "/medias/Oppo-F17-Smartphone-491901066-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MzAwN3xpbWFnZS9qcGVnfGltYWdlcy9oNjIvaDc3LzkzODAyNzY0MDQyNTQuanBnfDdmYzY2MzhmZjk4NzM3ZGIzNjIyNjVjMWQ3NTVlOGJhOWQ3NjIxOGFjMzlhOWNkYzFiZjQzODUyZDIwZWVjZGU",
      name: "Oppo F17 128 GB, 6 GB RAM, Dynamic Orange, Smartphone",
      price: 16990,
    },
    {
      img:
        "/medias/Samsung-M21-Smart-Phones-491667283-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNzA0MHxpbWFnZS9qcGVnfGltYWdlcy9oM2QvaGJhLzkyNjg0NTg2NTE2NzguanBnfDNiMjFiZGM4ODIyN2E0ZjQzN2RmMGE2ZTg5YmM3NDQ3NGNkNTUzNzU1ZGU4MGQ5NTJiMjAxMmQyYmZlNzQ2OTI",
      name: "Samsung Galaxy M21 Smart Phone 128 GB, 6 GB RAM, Blue",
      price: 16499,
    },
    {
      img:
        "/medias/Oppo-A53-6GB-Smartphone-491900903-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzOTQ4MnxpbWFnZS9qcGVnfGltYWdlcy9oZDIvaDk5LzkzNzA1NTU5NDA4OTQuanBnfDQ3ZGY5Y2YwY2UzODllNjgzNDFlNTc5N2EyZmNjY2E1NmVjYWU2MGIyNTAyOTI2MjgyZjAxZjUyNDQ4ZGRhODQ",
      name: "Oppo A53 128 GB, 6 GB RAM, Fancy Blue, Smartphone",
      price: 15490,
    },
    {
      img:
        "/medias/Realme-6-White-RBS0606IN-Smart-Phones-491600706-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4OTIwfGltYWdlL2pwZWd8aW1hZ2VzL2g5MC9oMjYvOTI2MDk5OTA4MjAxNC5qcGd8YTljZTQyNTMyNWNmZTM4NjBjZTZmOWY0NjJlOTIxOGI2YTk5YmMyNDA0ZmUxYWUxNDUzYzg3MjY4NTA1MGNmNQ",
      name: "Realme 6 128 GB, 8 GB RAM, Comet White, Smartphone",
      price: 15099,
    },
    {
      img:
        "/medias/Oppo-F17-8-128GB-Navy-Blue-491901067-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDE5OHxpbWFnZS9qcGVnfGltYWdlcy9oZmMvaDlkLzkzODgyMDQwOTc1NjYuanBnfGRkMzU3ZWMxYzFmMGEyODk4MTgxMDMzZTZmZjZkYzc3MDI4YTBmNDViMjE4NGZlMmU5MzI1OTBhM2UwYzcyOWQ",
      name: "Oppo F17 128 GB, 8 GB RAM",
      price: 18490,
    },
    {
      img:
        "/medias/Samsung-M31-Smart-Phone-491667111-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3OTU2fGltYWdlL2pwZWd8aW1hZ2VzL2gyYi9oM2YvOTI1ODYzNDQ0NDgzMC5qcGd8NjhhOTMwNzY2MmZkNWM5M2Q0NDNiM2I4MTAwODFmNGYwNzc5NDRjNjNmODY3ZDMyMzMwMzc5MTZjMmZhZjE0Yw",
      name: "Samsung Galaxy M31 128 GB, 6 GB RAM, Blue Smartphone",
      price: 18499,
    },
    {
      img:
        "/medias/Redmi-Note-9-Grey-6-128-Smart-Phone-491897352-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDQxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaDFiL2hlZi85NDAwMjkwMDUwMDc4LmpwZ3wzNzc3MWMyOTI3N2E4MzEyYmRkYmU0OGQ3NDgyY2QyMTYyNzU4NGFlMmM3NjgyZjYxZjBhOWM2MWNmNWVhMzgx",
      name: "Redmi Note 9 128 GB, 6 GB RAM, Arctic White, Smartphone",
      price: 18490,
    },
    {
      img:
        "/medias/Samsung-M40-Midnight-Blue-6GB-128GB-6-3-SmartPhone-491584323-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w5ODc0fGltYWdlL2pwZWd8aW1hZ2VzL2gxNC9oZmUvOTE3MzU3ODY0NTUzNC5qcGd8NTllMjFiMTJjMmMwMWRmMWU4ODRjNWEzYzJhYTc3ZmE0M2Y1MzhlNWY1NTMyYmQ3ZTVkYTFkZTkxMDM2Yzg3Yw",
      name: "Samsung Galaxy M40 128 GB, 6 GB RAM, Midnight Blue, Smartphone",
      price: 16850,
    },
    {
      img:
        "/medias/VIVO-U20-Smart-Phones-491615470-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDI2NXxpbWFnZS9qcGVnfGltYWdlcy9oYzUvaGE3LzkyMzI0MjAyMDg2NzAuanBnfDY2MWM0NmEwNGYwMWQ2YzQwOTdkNGZmMjFkMjcyYjdhNDc3ZTViZjI0NTg1YzM1NDM4MzY5MDRkNTgwYWMyYWY",
      name: "VIVO U20 Smart Phone 128 GB, 8 GB RAM, Blaze Blue",
      price: 17990,
    },
    {
      img:
        "/medias/Oppo-F17-8-128GB-Navy-Blue-491901067-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDE5OHxpbWFnZS9qcGVnfGltYWdlcy9oZmMvaDlkLzkzODgyMDQwOTc1NjYuanBnfGRkMzU3ZWMxYzFmMGEyODk4MTgxMDMzZTZmZjZkYzc3MDI4YTBmNDViMjE4NGZlMmU5MzI1OTBhM2UwYzcyOWQ",
      name: "Oppo F17 128 GB, 8 GB RAM",
      price: 18490,
    },
    {
      img:
        "/medias/Realme-RBS0623IN-Smart-Phones-491600709-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDA3OXxpbWFnZS9qcGVnfGltYWdlcy9oNWIvaDE3LzkyNjEwMDE3MDM0NTQuanBnfDBlNmMyN2UzMDUyYmMzZWQ2YjgwMjg0ZTUxYzg5NzI1MzVjNDVkN2NmMTcwMmM3ZTg3N2M3MzAzZWNmMTYyYTU",
      name: "Realme 6 Pro 128 GB, 6 GB RAM, Lightning Orange, Smartphone",
      price: 19099,
    },
    {
      img:
        "/medias/Realme-7-Pro-Smartphone-491901029-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MTkxOHxpbWFnZS9qcGVnfGltYWdlcy9oYWQvaGIyLzkzNzkzODgyNjAzODIuanBnfDY0YmMyYzY5ZGQ3NGM0ZjY1MzQ0MzYwNGQ5MGJlN2E3ODZjMjk3MjVlZmMyMDQzZDAyYmRmYTU0MDk4MGY5ODA",
      name: "Realme 7 Pro 128 GB, 6 GB RAM, Mirror Silver, Smartphone",
      price: 19999,
    },
    {
      img:
        "/medias/Samsung-A31-Smart-Phones-491838270-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MzY0MXxpbWFnZS9qcGVnfGltYWdlcy9oYTkvaGFiLzkzMDg5MjIwODU0MDYuanBnfDIwZjI1ZmU5NjQ1OWY0NWRkNDE3YjYzMjYzNjQyYWZiY2M4Mjk5NTAxMDQxNjg3MWI0NWVjZjk0ODMxMTM0YTI",
      name: "Samsung Galaxy A31 Smart Phone 128 GB, 6 GB RAM, Prism Crush Blue",
      price: 17999,
    },
  ];

  return data.map(({ img, name, price }, SIZE) => (
    name && <Card key={img} img={img} name={name} price={price}></Card>
  ));
}

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardContainer}>{fetchData()}</div>
      </div>
    </>
  );
}
