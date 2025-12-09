import React from 'react'
import { menu_list } from '../assets/frontend_assets/assets'

const Menu = () => {
    return <div className='my-8 flex-column gap-10'>
        <h2 className='text-[50px] font-bold'>Explor our menu</h2>
        <p className='text-gray-500 text-[18px] w-[60%] text-center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consequuntur est dolorum aut aliquid optio. Quia omnis similique illo placeat.
        </p>
        <div className='flex-items gap-10'>
            {
                menu_list.map(({ _id, menu_name, menu_image }) => {
                    return <div key={_id} className='flex-column gap-6'>
                        <div className='w-[100px] h-[100px] rounded-full overflow-hidden cursor-pointer  hover:-translate-y-2 duration-300 transition'>
                            <img src={menu_image} draggable=
                                {false}
                                className='w-full h-full object-contain'
                            />
                        </div>
                        <p className='text-gray-500 font-bold'> {menu_name} </p>
                    </div>
                })
            }
        </div>
    </div>
}

export default Menu