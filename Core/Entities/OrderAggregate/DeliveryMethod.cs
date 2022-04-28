
namespace Core.Entities.OrderAggregate
{
    public class DeliveryMethod : BaseEntity
    {
        public string? ShortName { get; set; }
        public string? DeliveryTime { get; set; }
        public string? Desctiption { get; set; }
        public decimal Price { get; set; }
    }
}
