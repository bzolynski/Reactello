using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactello.Api.Models
{
    public enum ResponseStatus
    {
        success,
        error
    }
    public class Response
    {
        public ResponseStatus ResponseStatus { get; private set; }
        public string ErrorMessage { get; private set; }
        public object ResponseObject { get; private set; }

        public static Response Error(string errorMessage)
        {
            return new Response
            {
                ResponseStatus = ResponseStatus.error,
                ErrorMessage = errorMessage
            };
        }
        public static Response Success(object responseObject)
        {
            return new Response
            {
                ResponseStatus = ResponseStatus.success,
                ResponseObject = responseObject
            };
        }

    }
}
