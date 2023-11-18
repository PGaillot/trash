import { Component, ElementRef, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-trash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss',
})
export class TrashComponent {
  @ViewChild('trash') trashRef!: ElementRef

  mouseDown(event: MouseEvent) {
    const trash = this.trashRef.nativeElement

    function moveAtPosition(x: number, y: number) {
      console.log('mouse at position.')
      trash.style.left = x - trash.offsetWidth / 2 + 'px'
      trash.style.top = y - trash.offsetHeight / 2 + 'px'
    }

    function onMouseMove(event: MouseEvent) {
      moveAtPosition(event.pageX, event.pageY)
    }

    moveAtPosition(event.pageX, event.pageY)

    trash.addEventListener('mousemove', onMouseMove)

    trash.onmouseup = function () {
      console.log('on mouse up !');
      
      trash.removeEventListener('mousemove', onMouseMove);
      trash.onmouseup = null;
    }
  }
}
