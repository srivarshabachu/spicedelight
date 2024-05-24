import { useEffect, useState } from "react";
import Image from "next/image";
import MenuItemPriceProps from '../../components/layout/MenuItemPriceProps'
export default function MenuItemForm({ onSubmit, menuItem }) {
    const [name, setName] = useState(menuItem?.name || '');
    const [description, setDescription] = useState(menuItem?.description || '');
    const [basePrice, setBasePrice] = useState(menuItem?.basePrice || '');
    const [sizes, setSizes] = useState(menuItem?.sizes || []);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(menuItem?.category || '');
    useEffect(() => {
        fetch('/api/categories').then(res => {
            res.json().then(categories => {
                setCategories(categories);
            });
        });
       
    }, []);
    return (
        <form
            onSubmit={ev =>
                onSubmit(ev, {
                     name, description, basePrice ,sizes ,category
                })
            }
            className="mt-8 max-w-2xl mx-auto">
            <div
                className="md:grid items-start gap-4"
                style={{ gridTemplateColumns: '.3fr .7fr' }}>
                <div>
                    <Image />
                </div>
                <div className="grow">
                    <label>Item name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={ev => setName(ev.target.value)}
                    />
                    <label>Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={ev => setDescription(ev.target.value)}
                    />
                    <label>Category</label>
                    <select value={category} onChange={ev => setCategory(ev.target.value)}>
                        {categories?.length > 0 && categories.map(c => (
                            <option key={c._id} value={c._id}>{c.name}</option>
                        ))}
                    </select>
                    <label>Base price</label>
                    <input
                        type="text"
                        value={basePrice}
                        onChange={ev => setBasePrice(ev.target.value)}
                    />
                    <MenuItemPriceProps name={'Sizes'}
                        addLabel={'Add item size'}
                        props={sizes}
                        setProps={setSizes} />
                    <button type="submit">Save</button>
                </div>
            </div>
        </form>
    );
}