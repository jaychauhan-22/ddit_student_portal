using System.Text.Json.Serialization;

namespace DDITStudentPortal.Models
{
    public class Fees
    {
        public int FeesId { get; set; }
        public string? Txndate{ get; set; }
        public string? Vouchernumber { get; set; }
        public int Batchyear { get; set; }
        public int Sessionnumber{ get; set; }
        public string? Admissiontype { get; set; }
        public int Feesamount { get; set; }
        public string Txnstatus { get; set; }
        public string? Paymode { get; set; }
        public int Chequenumber { get; set; }
        public string? Chequedate { get; set; }
        public string? Bankbranch { get; set; }
        public string? Paiddate { get; set; }
        public string? Reconsiledate { get; set; }
        public string? Reconsiledate2 { get; set; }
        [JsonIgnore]
        public Student? Student { get; set; }
        public int StudentId { get; set; }







    }
}
