using Microsoft.EntityFrameworkCore;
using EmployeeDetailsWebAPI.Models;

namespace EmployeeDetailsWebAPI.Data
{
    public class EmployeeDB: DbContext
    {
        public EmployeeDB(DbContextOptions options):base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }

    }
}
