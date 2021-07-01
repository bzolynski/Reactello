﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Dtos.Sections
{
    public class UpdateSectionDto
    {
        public string Name { get; set; }
        public string Color { get; set; }
        public int Position { get; set; }

        public int BoardId { get; set; }
    }
}
