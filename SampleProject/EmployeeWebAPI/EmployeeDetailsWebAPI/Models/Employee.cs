using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace EmployeeDetailsWebAPI.Models
{
    
    public class Employee
    {
        [Key]
        public int EmpId { get; set; }

       public string FirstName { get; set; }

        public string LastName { get; set; }
        public string Email { get; set; }
        public long ContactNo { get; set; }
    }
}
