import React from 'react'
import { menu_list } from '../assets/frontend_assets/assets'

const Menu = () => {
    return <div id='menu' className='gap-10 my-8 flex-column'>
        <h2 className='text-[50px] font-bold'>Explor our menu</h2>
        <p className='text-gray-500 text-[18px] w-[60%] text-center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consequuntur est dolorum aut aliquid optio. Quia omnis similique illo placeat.
        </p>
        <div className='gap-10 flex-items'>
            {
                menu_list.map(({ _id, menu_name, menu_image }) => {
                    return <div key={_id} className='gap-6 flex-column'>
                        <div className='w-[100px] h-[100px] rounded-full overflow-hidden cursor-pointer  hover:-translate-y-2 duration-300 transition'>
                            <img src={menu_image} draggable=
                                {false}
                                className='object-contain w-full h-full'
                            />
                        </div>
                        <p className='font-bold text-gray-500'> {menu_name} </p>
                    </div>
                })
            }
        </div>
    </div>
}

export default Menu