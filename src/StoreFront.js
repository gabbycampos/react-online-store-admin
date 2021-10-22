import React, { useState } from 'react';
import AddProductForm from './AddProductForm';
import ProductsList from './ProductsList';

const StoreFront = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [validation, setValidation] = useState('');

    function handleFormSubmit(event) {
        event.preventDefault();

        if (!name) {
            setValidation("Please enter a name");
            return;
        }
        if (!description) {
            setValidation("Please enter a description");
            return;
        }
        setProducts([...products, {
            id: products.length + 1,
            name: name,
            description: description
        }]);
        setName('');
        setDescription('');
        setValidation('');
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }
    function handleDeleteClick(id) {
        setProducts(products.filter(product => product.id !== id));
    }

    return (
        <div>
            <div>
                <AddProductForm
                    name={name}
                    description={description}
                    validation={validation}
                    onNameChange={handleNameChange}
                    onDescriptionChange={handleDescriptionChange}
                    onFormSubmit={handleFormSubmit}
                />
            </div>
            <div>{products.length === 0 && <p>Add your first product</p>}</div>
            <div>
                <ProductsList products={products} onDeleteClick={handleDeleteClick} />
            </div>
        </div>
    )
}

export default StoreFront;