import { useState } from "react";
import Trash from '../icons/Trash'
import ChevronUp from '../icons/ChevronUp'
import ChevronDown from '../icons/ChevronDown'
export default function MenuItemPriceProps({ name, addLabel, props, setProps }) {

    const [isOpen, setIsOpen] = useState(false);

    function addProp() {
        setProps(oldProps => {
            return [...oldProps, { name: '', price: 0 }];
        });
    }

    function editProp(ev, index, prop) {
        const newValue = ev.target.value;
        setProps(prevSizes => {
            const newSizes = [...prevSizes];
            newSizes[index][prop] = newValue;
            return newSizes;
        });
    }

    function removeProp(indexToRemove) {
        setProps(prev => prev.filter((v, index) => index !== indexToRemove));
    }

    return (
        <div className="p-2 rounded-md mb-2 border border-gray-300">
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className="inline-flex p-1 border-0 justify-start"
                type="button">
                {isOpen && (
                    <ChevronUp />
                )}
                {!isOpen && (
                    <ChevronDown />
                )}
                <span>{name}</span>
                <span>({props?.length})</span>
            </button>
            <div className={isOpen ? 'block' : 'hidden'}>
                {props?.length > 0 && props.map((size, index) => (
                    <div key={index} className="flex items-end gap-2">
                        <div>
                            <label>Name</label>
                            <input type="text"
                               
                                placeholder="Size name"
                                value={size.name}
                                onChange={ev => editProp(ev, index, 'name')}
                            />
                        </div>
                        <div>
                            <label>Price</label>
                            <input type="text" placeholder="price"
                                value={size.price}
                                onChange={ev => editProp(ev, index, 'price')}
                            />
                        </div>
                        <div>
                            <button type="button"
                                onClick={() => removeProp(index)}
                                className="mb-6">
                               <Trash/>
                            </button>
                        </div>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addProp}
                    className="bg-gray-100 w-full rounded-md p-4 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>{addLabel}</span>
                </button>
            </div>
        </div>
    );
}