// export const nameGetter = state => state.demo.name
// export const ctxGetter = state => state.game.ctx
export default{
    nameGetter : state => state.demo.name,
    ctxGetter : state => state.game.ctx,
    roominfo : state => state.food.roominfo,
    orders : state=>state.food.orders,
}