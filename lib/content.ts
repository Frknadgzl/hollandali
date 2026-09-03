export type MenuItem = {
  id: number;
  name: string;
  category: "Burger" | "Çıtır Tavuk" | "Loaded Fries" | "Kova";
  description: string;
  price: number;
  badge?: string;
};

export const fallbackMenu: MenuItem[] = [
  { id: 1, name: "Hollandalı Original", category: "Burger", description: "Çıtır tavuk fileto, turşu, iceberg ve Hollandalı özel sosu.", price: 219, badge: "Çok satan" },
  { id: 2, name: "Acılı Cheddar", category: "Burger", description: "Çıtır tavuk, cheddar, jalapeño ve acılı Hollandalı sosu.", price: 239 },
  { id: 3, name: "Hot Wings", category: "Çıtır Tavuk", description: "Dışı ekstra çıtır, içi sulu, özel baharatlı kanatlar.", price: 199, badge: "Yeni" },
  { id: 4, name: "Tender Box", category: "Çıtır Tavuk", description: "El kesimi tavuk tender, patates ve iki özel sos.", price: 249 },
  { id: 5, name: "Cheddar Loaded Fries", category: "Loaded Fries", description: "Patates, cheddar sosu, çıtır tavuk parçaları ve taze otlar.", price: 189 },
  { id: 6, name: "Hollandalı Kova", category: "Kova", description: "Paylaşmalık tender, wings, patates ve üç sos.", price: 449, badge: "Paylaş" },
];

export async function getMenu(): Promise<MenuItem[]> {
  const base = process.env.STRAPI_URL;
  if (!base) return fallbackMenu;

  try {
    const response = await fetch(`${base}/api/menu-items?sort=order:asc`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) return fallbackMenu;

    const json = await response.json();
    return json.data.map((item: any) => ({
      id: item.id,
      ...item,
    })) as MenuItem[];
  } catch {
    return fallbackMenu;
  }
}
