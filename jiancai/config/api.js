const ApiRootUrl = 'https://www.ledc.cn/xhr/api/';
const RootUrl = 'https://www.ledc.cn/';
module.exports = {
  RootUrl,
  IndexUrl: ApiRootUrl + 'method/def',        //首页
  CatalogList: ApiRootUrl + 'method/catalog',     //分类目录全部分类
  CatalogCurrent: ApiRootUrl + 'method/current',  //分类目录当前分类
  GetPhoneNumber: RootUrl + 'simple/getPhoneNumber',  //电话号码解密接口
  AuthLoginByWeixin: RootUrl + 'simple/wxlogin',  //微信小程序登录
  GoodsCount: ApiRootUrl + 'method/goodscount',  //统计商品总数
  GoodsList: ApiRootUrl + 'method/goodslist',     //商品列表
  GoodsCategory: ApiRootUrl + 'method/category',  //分类数据
  GoodsDetail: ApiRootUrl + 'method/goodsdetail',  //商品详情
  GetProduct: ApiRootUrl + 'method/getProduct',  //获取货品数据
  GetProducts: ApiRootUrl + 'method/getProducts',  //*根据商品id获取货品
  GoodsNew: ApiRootUrl + 'method/goodsNew',  //新品
  GoodsHot: ApiRootUrl + 'method/goodsHot',  //热销
  GoodsRelated: ApiRootUrl + 'method/goodsrelated',  //商品详情页（大家都在看）
  BrandList: ApiRootUrl + 'method/brand',      //品牌列表
  BrandDetail: ApiRootUrl + 'method/brandDetail',  //品牌详情
  CartList: ApiRootUrl + 'method/cartShow', //获取购物车数据
  CartAdd: ApiRootUrl + 'method/cartAdd',   //添加购物车
  CartUpdate: ApiRootUrl + 'method/cartUpdate', // 更新购物车商品
  CartDelete: ApiRootUrl + 'method/cartDelete', // 删除购物车商品
  CartChecked: ApiRootUrl + 'method/cartChecked', // 选择或取消购物车商品
  CartGoodsCount: ApiRootUrl + 'method/cartGoodscount', // 获取购物车商品件数
  CartCheckout: ApiRootUrl + 'method/cartCheckout',     // 下单前信息确认
  OrderSubmit: ApiRootUrl + 'method/ordersubmit', // 提交订单
  PayPrepayId: ApiRootUrl + 'method/pay', //获取微信统一下单prepay_id
  CollectList: ApiRootUrl + 'method/CollectList',  //收藏列表
  CollectAddOrDelete: ApiRootUrl + 'method/favorite',  //添加或取消收藏
  CommentList: ApiRootUrl + 'method/comment/list',  //评论列表@
  CommentCount: ApiRootUrl + 'method/comment/count',  //评论总数@
  CommentPost: ApiRootUrl + 'method/comment/post',   //发表评论@
  TopicList: ApiRootUrl + 'method/topic/list',  //专题列表@
  TopicDetail: ApiRootUrl + 'method/topic/detail',  //专题详情@
  TopicRelated: ApiRootUrl + 'method/topic/related',  //相关专题@
  SearchIndex: ApiRootUrl + 'method/search/index',  //搜索页面数据@
  SearchResult: ApiRootUrl + 'method/search/result',  //搜索数据@
  SearchHelper: ApiRootUrl + 'method/search/helper',  //搜索帮助@
  SearchClearHistory: ApiRootUrl + 'method/search/clearhistory',  //搜索历史@
  AddressList: ApiRootUrl + 'method/addressList',  //收货地址列表
  AddressDetail: ApiRootUrl + 'method/addressDetail',  //收货地址详情
  AddressSave: ApiRootUrl + 'method/addressSave',  //保存收货地址
  AddressDelete: ApiRootUrl + 'method/addressDelete',  //删除收货地址
  RegionList: ApiRootUrl + 'method/regionList',  //获取区域列表
  OrderList: ApiRootUrl + 'method/orderList',  //订单列表
  OrderDetail: ApiRootUrl + 'method/orderDetail',  //订单详情
  OrderCancel: ApiRootUrl + 'method/orderCancel',  //取消订单@
  OrderExpress: ApiRootUrl + 'method/orderExpress', //物流详情@
  FootprintList: ApiRootUrl + 'method/footprintList',  //足迹列表@
  FootprintDelete: ApiRootUrl + 'method/footprintDelete',  //删除足迹@
};