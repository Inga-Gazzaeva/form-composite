"use strict"
mainObj.header=
{
	show(instance)
	{
		if(instance.classList.contains('active'))
		{
			instance.classList.remuve('active')
		}
		else
		{
			instance.classList.add('active')
		}
	}
}



