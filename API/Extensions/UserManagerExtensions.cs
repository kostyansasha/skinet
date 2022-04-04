using Core.Entities.Identity;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class UserManagerExtensions
    {
        public static async Task<AppUser?> FindUserByClaimsPrincipleWithAddressAsync(this UserManager<AppUser> input, ClaimsPrincipal user)
        {
            //Microsoft.AspNetCore.Http.HttpContext.User.Claims
            var email = user.FindFirst(ClaimTypes.Email)?.Value;

            if (email == null)
                return null;

            return await input.Users.Include(x => x.Address).SingleOrDefaultAsync(x => x.Email == email);
        }

        public static async Task<AppUser?> FindUserByEmailFromClaimsPrinciple(this UserManager<AppUser> input, ClaimsPrincipal user)
        {
            var email = user.FindFirst(ClaimTypes.Email)?.Value;

            if (email == null)
                return null;

            return await input.Users.SingleOrDefaultAsync(x => x.Email == email);
        }

    }
}
