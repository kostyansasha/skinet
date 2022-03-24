namespace Core.Entities
{
    public class CustomerBasket
    {
        public CustomerBasket()
        {
            Id = string.Empty;
        }

        public CustomerBasket(string id)
        {
            Id = id;
        }

        public string Id { get; set; }
        public List<BasketItem> Items { get; set; } = new List<BasketItem>();
    }
}
