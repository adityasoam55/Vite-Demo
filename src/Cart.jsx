import React from "react";

function Cart() {
    return (
        <div className="border-2 border-red-400 w-5/6 m-auto mt-10 bg-white">
            <div className="flex w-full justify-center items-center py-2">
                <h3 className="w-1/2 flex justify-center">Products</h3>
                <div className="flex w-1/2 justify-around items-center">
                    <h3>Price</h3>
                    <h3>Quantity</h3>
                    <h3>Subtotal</h3>
                </div>
            </div>
            <hr class="h-px my-1 border-0 dark:bg-red-400"></hr>
            <div className="flex p-2">
                <div className="w-1/2 flex justify-evenly">
                    <div className="">image</div>
                    <div>Title</div>
                </div>
                <div className="w-1/2 flex justify-around ">
                    <h3>$25.00</h3>
                    <h3 className="border-2 py-1 px-2">2</h3>
                    <h3>$50.00</h3>
                </div>
            </div>
        </div>
    );
}
export default Cart;

